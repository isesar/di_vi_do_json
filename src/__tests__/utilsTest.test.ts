import { recompose } from "../utils";

describe("testing utils functions", () => {
  test("Testing recompose function", () => {
    const testObject = {
      enviroment: "dev",
      database: {
        host: "postgre",
        port: "3034",
        username: "postgre",
      },
    };

    const path = "database";
    const results = recompose(testObject, path);

    expect(results).toEqual({
      host: "postgre",
      port: "3034",
      username: "postgre",
    });
  });

  test("merging objects", () => {
    const obj1 = {
      enviroment: "dev",
      database: {
        host: "postgre",
        port: "3034",
        username: "postgre",
      },
    };

    const obj2 = {
      enviroment: "prod",
      database: {
        host: "postgre",
        port: "3034",
        username: "postgre",
      },
      cache: {
        name: "redis",
      },
    };

    expect(Object.assign({}, ...[obj1, obj2])).toEqual({
      cache: {
        name: "redis",
      },
      database: {
        host: "postgre",
        port: "3034",
        username: "postgre",
      },
      enviroment: "prod",
    });
  });
});
