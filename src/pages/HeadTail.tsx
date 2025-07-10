import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function HeadTail() {
  const [selection, setSelection] = useState<string | "">("");
  const [columns, setColumns] = useState<string[][]>([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!selection) {
      setError("Please select value from dropdown");
      return;
    }

    setError("");

    const lastCol = columns[columns.length - 1];
    const newColumns = [...columns];

    if (!lastCol || lastCol[0] !== selection) {
      newColumns.push([selection]);
    } else {
      lastCol.push(selection);
    }

    setColumns(newColumns);
    setSelection("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8">
      <h1 className="text-3xl font-bold text-yellow-700 text-center mb-8">
        Head & Tail Game
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <Select value={selection} onValueChange={(val) => setSelection(val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="H">H</SelectItem>
            <SelectItem value="T">T</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleSubmit}>Submit</Button>
      </div>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="flex justify-center gap-6 mt-6">
        {columns.map((col, idx) => (
          <div
            key={idx}
            className="space-y-1 border border-yellow-200 p-2 rounded bg-white shadow"
          >
            {col.map((val, i) => (
              <div
                key={i}
                className="text-xl font-semibold text-yellow-700 text-center"
              >
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
