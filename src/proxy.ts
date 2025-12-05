import { captureRegistryEvent } from "@wandry/analytics-sdk";
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  captureRegistryEvent(
    request,
    "31|3SGJFvi5TFqN6yukbwLJbpCOS9P31cUd0JdddrNh0a077f4c"
  );
  return NextResponse.next();
}
