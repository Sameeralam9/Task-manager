import { X } from "lucide-react";
import Button from "./Button";

function InputForm({
  editMode,
  val,
  inputRef,
  bg,
  form,
  value,
  setValue,
  addTodo,
  priority,
  setPriority,
  date,
  setDate,
  cancelEdit,
  updateTodo,
}) {
  const minDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className={`${bg && "bg-gray-50 p-4 "}`}>
        {bg && (
          <div className="pb-3 text-gray-800 flex justify-between w-full">
            <span>Add New Task</span>
            <X
              className="cursor-pointer"
              onClick={() => form(false)}
              size={20}
              color="#4b5563"
            />
          </div>
        )}
        <div>
          <input
            placeholder="What needs to be done?"
            type="text"
            value={value}
            ref={inputRef}
            onChange={(e) => setValue(e.target.value)}
            className={`w-full p-2 md:p-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
              !value.trim() ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
        </div>
        <div className=" flex gap-4 mt-3">
          <div className="flex flex-col">
            <label className="text-sm  text-gray-600 p-1" htmlFor="priority">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              name="prioroty"
              id="priority"
              className="rounded md:w-25 md:h-10 p-1 md:p-2 bg-zinc-100  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 p-1" htmlFor="date">
              Due Date
            </label>
            <input
              min={minDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
              type="date"
              className="rounded w-35 md:w-37 bg-white md:h-12 p-1 md:p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          {!editMode ? (
            <div className="w-full flex justify-end mt-4">
              <Button
                fn={addTodo}
                text="Add Task"
                color="blue"
                pd="md:px-3 md:py-1.5 px-2 py-1 "
              />
            </div>
          ) : (
            <div className="flex gap-2 mt-3 justify-end">
              <Button fn={cancelEdit} text="Cancel" pd="px-3 py-1" />
              <Button
                fn={() => updateTodo(val.id)}
                text="Save"
                color="blue"
                pd="px-3 py-1"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InputForm;
