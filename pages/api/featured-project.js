import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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
// export default (req, res) => {
//     if (req.method != "POST") {
//         return res.status(500).json({ message: "Method not allowed" });
//     }

//     const projectData = JSON.parse(req.body);
//     const savedProject = prisma.featuredProject.create({
//         data: projectData
//     })
//     res.json(savedProject)
//     res.status(200).json({ message: 'Imported data' })
//   }

export default async (req, res) => {
    switch(req.method) {
        case "GET":
            const projectData = await prisma.featuredProject.findMany();
            res.status(200).json({ projects: projectData })
            break;
        
        default:
            res.status(400).json({ message: "Wrong call type, GET only" })
            break;
    }
    // const projectData = await prisma.featuredProject.findMany();
    // res.status(200).json({ projects: projectData })
}