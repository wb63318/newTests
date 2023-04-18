import fs from "fs";

export default async function queryDB(externalFunction) {
  try {
    let info = [];
    if (fs.existsSync("db.json")) {
      await fs.readFile("db.json", function (error, data) {
        if (error) {
          console.log("Reading File Failed", error);
          return;
        }
        info = JSON.parse(data.toString());
        console.log(info);

        if (externalFunction && !error) {
          externalFunction(info);
          return;
        }
      });
    } else {
      if (externalFunction) {
        externalFunction();
        return;
      }
    }
  } catch (error) {
    console.log("Something Went Wrong", error);
  }
}
