import { Board } from "./board";

export default function KanbanBoardPage() {
  return (
    <div>
      <h1>Jura</h1>
      <div className="flex gap-4">
        <Board />
      </div>
    </div>
  );
}
