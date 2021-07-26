import { openDB } from "idb";

const dbPromise = openDB("weekly_planner_store", 1, {
  upgrade(db) {
    db.createObjectStore("weekly_planner");
  },
});

export async function saveUserTheme(key, val) {
  return (await dbPromise).put("weekly_planner", val, key);
}

export async function getUserTheme(key) {
  return (await dbPromise).get("weekly_planner", key);
}
