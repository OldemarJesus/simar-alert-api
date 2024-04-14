"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const simar_service_1 = require("./services/simar-service");
// Settings
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.register(cors_1.default, {
    origin: "*",
    methods: ["GET"]
});
// Declare a route
fastify.get('/', function handler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        return { hello: 'world' };
    });
});
// Declare a route
fastify.get('/alerts', function handler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const alerts = yield (0, simar_service_1.getLastSimarAlertsFromCache)();
            return alerts;
        }
        catch (error) {
            console.error(error);
            return reply.code(500).send({ error: "Something went wrong!" });
        }
    });
});
exports.default = fastify;
