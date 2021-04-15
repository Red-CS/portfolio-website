/** Prisma Client */
import prisma from "./_base.js"

/** Max number of featured projects in the database */
const MAX_FEATURED_PROJECTS = 2;
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
    console.log("before")
    const projectData = await prisma.featuredProject.findMany();
    console.log("after")

    switch(req.method) {
        case "GET":
            console.log("get")
            try {
            return res.status(200).json({ projects: projectData })
            }
            catch (err) {
                return res.status(400).json({ error : err})
            }
        
        case "POST":
            // Ensure that the database doesn't already have 2 entries
            if (projectData.length >= MAX_FEATURED_PROJECTS) {
                return res.status(400).json({ 
                    message: "There are already the maximum number of projects allowed"
                })
            }
            try {
                const newProject = JSON.parse(req.body);
                // Add record
                await prisma.featuredProject.create(
                    {
                        data: newProject
                    }
                )

                return res.status(200).json(
                    { 
                        message: "Successfully created new Featured Project"
                    }
                );
            }
            catch (err) {
                if (err instanceof SyntaxError) {
                    return res.status(400).json({ 
                        message: "Error in adding project, unexpected end of JSON input"
                    });
                }
                return res.status(500).json({
                    message: "An unexpected (server) error occurred"
                });
            }
        
        case "PUT":
        case "PATCH":
            try {
                const newProject = JSON.parse(req.body);
                // Update record
                await prisma.featuredProject.update({
                    where: { project_name: newProject.project_name },
                    data: newProject
                });

                return res.status(200).json(
                    { 
                        message: "Successfully updated Featured Project"
                    }
                );
            }
            catch (err) {
                if (err instanceof SyntaxError) {
                    return res.status(400).json({ 
                        message: "Error in adding project, unexpected end of JSON input"
                    });
                }
                return res.status(500).json({
                    message: "An unexpected (server) error occurred"
                });
            }
        
        case "DELETE":
            try {
                const projectName = JSON.parse(req.body);
                // Delete record
                await prisma.featuredProject.delete({
                    where: { project_name: projectName.project_name }
                });

                return res.status(200).json(
                    { 
                        message: "Successfully deleted Featured Project"
                    }
                );
            }
            catch (err) {
                if (err instanceof SyntaxError) {
                    return res.status(400).json({ 
                        message: "Error in adding project, unexpected end of JSON input"
                    });
                }
                return res.status(500).json({
                    message: "An unexpected (server) error occurred"
                });
            }
        
        default:
            res.status(400).json({ message: `Wrong call type, ${req.method} not accepted` })
            break;
    }
}