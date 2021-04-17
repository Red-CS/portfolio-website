/** Prisma Client */
import supabase from "./_base.js";

/** Max number of featured projects in the database */
// const MAX_FEATURED_PROJECTS = 2;
// Refer: https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/

/*
400 Bad Request – This means that client-side input fails validation.
401 Unauthorized – This means the user isn’t not authorized to access a resource. It usually returns when the user isn’t authenticated.
403 Forbidden – This means the user is authenticated, but it’s not allowed to access a resource.
404 Not Found – This indicates that a resource is not found.
500 Internal server error – This is a generic server error. It probably shouldn’t be thrown explicitly.
502 Bad Gateway – This indicates an invalid response from an upstream server.
503 Service Unavailable – This indicates that something unexpected happened on server side (It can be anything like server overload, some parts of the system failed, etc.).
*/

/**
 * Handles the /api/featured-project API request and reacts with the database
 *
 * @example <caption>Retrieve all of the featured projects from the database:</caption>
 *     GET 200 /api/featured-project
 *
 * @example <caption>Add a Featured Project to the database:</caption>
 *     POST 200 /api/featured-project
 *
 * @example <caption>Replaces an Featured Project, or any of it's fields:</caption>
 *     PUT 200 /api/featured-project
 *     PATCH 200 /api/featured-project
 *
 * @example <caption>Removes a Featured Project from the database:</caption>
 *     DELETE 200 /api/featured-project
 *
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export default async (req, res) => {
    const { data } = await supabase.from("FeaturedProject").select("*");
    switch (req.method) {
        case "GET":
            try {
                return res.status(200).json({ projects: data });
            } catch (err) {
                return res.status(400).json({ error: err });
            }

        case "POST":
            // Ensure that the database doesn't already have 2 entries
            if (data.length >= 2) {
                return res.status(400).json({
                    message: "There are already the maximum number of projects allowed",
                    max: "2",
                    current: data.length
                });
            }
            try {
                const newProject = JSON.parse(req.body);
                // Add record
                const { data } = await supabase
                    .from("FeaturedProject")
                    .insert([newProject]);

                // If nothing was sent
                if (data === null) {
                    // Improper request format
                    return res.status(400).json({
                        message: "Error in sending project. Ensure body is formatted correctly"
                    })
                }
                return res.status(200).json({
                    message: "Successfully created new Featured Project",
                    dataSent: data
                });
            } catch (err) {
                if (err instanceof SyntaxError) {
                    return res.status(400).json({
                        message: "Error in adding project, unexpected end of JSON input",
                        error: JSON.parse(err)
                    });
                }
                return res.status(500).json({
                    message: "An unexpected (server) error occurred",
                });
            }

        case "PUT":
        case "PATCH":
            try {
                const newProject = JSON.parse(req.body);
                // TODO Return the right message when
                // a) the only data is the project name: error => null
                // b) The only data is the project name + it is wrong: error => []
                const { error } = await supabase
                    .from("FeaturedProject")
                    .update(newProject)
                    .match({ project_name: newProject.project_name });
                console.log(error);

                return res.status(200).json({
                    message: "Successfully updated Featured Project",
                });
            } catch (err) {
                if (err instanceof SyntaxError) {
                    return res.status(400).json({
                        message: "Error in adding project, unexpected end of JSON input",
                    });
                }
                return res.status(500).json({
                    message: "An unexpected (server) error occurred",
                });
            }

        case "DELETE":
            try {
                const projectName = JSON.parse(req.body).project_name;
                // Delete record
                const { data } = await supabase
                    .from("FeaturedProject")
                    .delete()
                    .match({ project_name: projectName })
                if (data.length == 0) {
                    return res.status(400).json({ message: "Nothing was deleted. Ensure that the project name is correct" })
                }
                return res.status(200).json({
                    message: "Successfully deleted Featured Project",
                    removedProject: data
                });
            } catch (err) {
                if (err instanceof SyntaxError) {
                    return res.status(400).json({
                        message: "Error in adding project, unexpected end of JSON input",
                    });
                }
                return res.status(500).json({
                    message: "An unexpected (server) error occurred",
                });
            }

        default:
            res.status(400).json({ message: `Wrong call type, ${req.method} not accepted` });
            break;
    }
};
