import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        tags: [
            {
                name: 'Tabla de Resultados',
                description: 'API obtencion de tabla de resultados'
            },
            {
                name: 'Usuarios',
                description: 'API control de usuarios'
            },
            {
                name: 'Reportes',
                description: 'API control de reportes'
            },
            {
                name: 'Autenticacion',
                description: 'API inicio de sesion y autenticacion de usuarios'
            },
            {
                name: 'Administracion',
                description: 'API de funciones reservadas para superadmin'
            }
        ],
        info: {
            title: 'API Plataforma Indicadores',
            version: '1.0.0',
            description: 'Documentacion para API relacionada a la plataforma de Indicadores'
        }
    },
    apis: ['./src/router.ts']
}

//Cambiar imagen de swagger
const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://public-cdn.hoteligy.com/320x0/multimedia/images/mm145254.png');
            height: 90px;
            width: 90px;
        }

        .swagger-ui .topbar {
            background-color: #009681
        }
    `,
    customSiteTitle: 'Documentacion REST API Express / TypeScript'
}

const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec
export{
    swaggerUiOptions
}