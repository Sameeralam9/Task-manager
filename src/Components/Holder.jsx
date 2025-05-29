import {
  AlertCircle,
  CheckCircle,
  Calendar,
  Trash2,
  Edit2,
} from "lucide-react";
import InputForm from "./InputForm";

function Holder({
  getAlert,
  isdueDate,
  formatDate,
  getPriorityColor,
  toggleTodo,
  sortedTodos,
  id,
  deleteTodo,
  inputRef,
  setEditId,
  value,
  setValue,
  priority,
  setPriority,
  date,
  setDate,
  cancelEdit,
  updateTodo,
}) {
  return (
    <>
      <div>
        {sortedTodos.map((val) => {
          return (
            <div
              className={`flex justify-between items-center mb-3 border-l-4  rounded-xl p-3 shadow ${
                val.completed
                  ? "bg-gray-100 border-gray-300"
                  : "bg-white border-blue-500"
              }`}
              key={val.id}
            >
              {id === val.id ? (
                <div className="w-full" key={val.id}>
                  <InputForm
                    editMode={true}
                    val={val}
                    inputRef={inputRef}
                    priority={priority}
                    setPriority={setPriority}
                    date={date}
                    setDate={setDate}
                    value={value}
                    setValue={setValue}
                    cancelEdit={cancelEdit}
                    updateTodo={updateTodo}
                  />
                </div>
              ) : (
                <>
                  <div className="flex md:gap-3 gap-1.5 ">
                    <div>
                      {val.completed ? (
                        <CheckCircle
                          className="cursor-pointer"
                          color="#22c55e"
                          size={20}
                          onClick={() => toggleTodo(val.id)}
                        />
                      ) : (
                        <div
                          onClick={() => toggleTodo(val.id)}
                          className=" w-5 h-5 rounded-full border-2 cursor-pointer border-gray-400"
                        ></div>
                      )}
                    </div>
                    <div>
                      <p
                        className={`${
                          val.completed && "text-gray-500 line-through"
                        }`}
                      >
                        {val.text}
                      </p>
                      <div className="flex gap-2 items-center mt-2">
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(
                            val.priority
                          )}`}
                        >
                          <span>{val.priority}</span>
                        </div>
                        {val.Date && (
                          <>
                            <div
                              className={`flex gap-1 p-1 md:px-2 md:py-1 justify-between items-center rounded-full ${
                                getAlert(val.Date)
                                  ? "bg-red-100 text-red-800"
                                  : isdueDate(val.Date)
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              <Calendar size={12} />
                              <span className="text-xs">
                                {formatDate(val.Date)}
                              </span>
                              {getAlert(val.Date) && <AlertCircle size={12} />}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <Edit2
                      className="cursor-pointer"
                      onClick={() => {
                        setEditId(val.id);
                        setValue(val.text);
                        setDate(val.Date) || "";
                        setPriority(val.priority);
                      }}
                      size={18}
                      color="#6b7280"
                    />
                    <Trash2
                      className="cursor-pointer"
                      onClick={() => deleteTodo(val.id)}
                      size={18}
                      color="#6b7280"
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Holder;
