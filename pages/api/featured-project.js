// import { PrismaClient } from "@prisma/client";
import prisma from "./_base.js"
// const prisma = new PrismaClient();

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
 * Used to import data to the database
 */

/**
 * @summary Handles the /api/featured-project API request
 * 
 * @example <caption>Retrieve all of the featured projects from the database:</caption>
 *     GET 200 /api/featured-project
 * 
 * @example <caption>Add a Featured Project to the database:</caption>
 *     POST 200 /api/featured-project
 *     
 * @example <caption>Replaces an Featured Project:</caption>
 *     PUT 200 /api/featured-project
 * 
 * @example <caption>Replaces a field of a Featured Project:</caption>
 *     PATCH 200 /api/featured-project
 * 
 * @example <caption>Removes a Featured Project from the database:</caption>
 *     DELETE 200 /api/featured-project
 * 
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export default async (req, res) => {
    const projectData = await prisma.featuredProject.findMany();
    switch(req.method) {
        case "GET":
            res.status(200).json({ projects: projectData })
            break;
        
        case "POST":
        case "PUT":
            // Ensure that the database doesn't already have 2 entries
            if (projectData.length > MAX_FEATURED_PROJECTS) {
                return res.status(400).json({ 
                    message: "There are already the maximum number of projects allowed"
                })
            }
            else {
                const newProject = JSON.parse(req.body);
                try {
                    // Add record
                    await prisma.featuredProject.upsert({
                        where: { project_name: newProject.project_name },
                        update: newProject,
                        create: newProject
                    });

                    // 
                    res.status(200).json(
                        { 
                            message: "Successfully updated/created new Featured Project",
                            project: newProject 
                        }
                    );
                }
                catch (err) {
                    if (err instanceof SyntaxError) {
                        res.status(400).json({ 
                            message: "Error in adding project, unexpected end of JSON input"
                        });
                    }
                    else {
                        res.status(500).json({
                            message: "An unexpected (server) error occurred"
                        });
                    }
                }
            }
            break;

        case "PATCH":
            break;
        
        case "DELETE":
            break;
        
        default:
            res.status(400).json({ message: `Wrong call type, ${req.method} not accepted` })
            break;
    }
    // const projectData = await prisma.featuredProject.findMany();
    // res.status(200).json({ projects: projectData })
}