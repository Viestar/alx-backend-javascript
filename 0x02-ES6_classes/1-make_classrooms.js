import ClassRoom from "./0-classroom.js";

const obj1 = ClassRoom(19);
const obj2 = ClassRoom(20);
const obj3 = ClassRoom(34);
const classArray = { obj1, obj2, obj3 };
export default function initializeRooms() {
    return classArray;
}
