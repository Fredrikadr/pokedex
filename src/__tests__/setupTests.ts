import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./mocks/server";



beforeAll(async () => {
    server.listen()
});

afterEach(() => {
    server.resetHandlers()
});

afterAll(() => {
    server.close()
});

