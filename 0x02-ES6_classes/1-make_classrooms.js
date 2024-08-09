import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomsSize = [19, 20, 34];
  const room = roomsSize.map((roomsSize) => new ClassRoom(roomsSize));
  return room;
}
