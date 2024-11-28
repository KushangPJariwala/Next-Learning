import { NextRequest } from "next/server";
import { noData, users } from "./data";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const id = params.get("id");
  const name = params.get("name");
  const filteredData =
    name || id
      ? users.filter((u) =>
          name && id
            ? u.name.includes(name) || u.id === +id
            : name
            ? u.name.includes(name)
            : id
            ? u.id === +id
            : noData
        )
      : users;
  return Response.json(filteredData.length?filteredData:noData);
}
