"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const app_module_1 = require("./app.module");
async function generate() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: false });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Categories API')
        .setDescription('REST API for managing categories')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    (0, fs_1.writeFileSync)('./swagger.json', JSON.stringify(document, null, 2));
    await app.close();
    console.log('swagger.json generated successfully.');
}
generate();
//# sourceMappingURL=generate-swagger.js.map