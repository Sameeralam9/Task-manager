import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputForm from "./InputForm";
import Holder from "./Holder";

function Manager() {
  const [showForm, setShowForm] = useState(false);
  const [priorityVal, setPriorityVal] = useState("Medium");
  const [editId, setEditId] = useState(null);
  const [dueDate, setDueDate] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [editText, setEditText] = useState("");

  const [tab, setTab] = useState(() => {
    return localStorage.getItem("tabs") || "All";
  });
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  // useEffct for persisent tabs and todo data
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("tabs", tab);
  }, [todos, tab]);

  //this ref func just focus on input for better UX
  const inputRef = useRef(null);
  const ref = () => {
    inputRef.current?.focus();
  };

  // addTodo main Func
  const addTodo = () => {
    if (!inputVal.trim()) {
      toast.error("Input Field Should Not Be Empty");
      return ref();
    }
    const data = [
      ...todos,
      {
        id: crypto.randomUUID(),
        text: inputVal,
        completed: false,
        priority: priorityVal,
        Date: dueDate || "",
      },
    ];
    setTodos(data);
    toast.success("Task Added Successfully");
    setInputVal("");
    setPriorityVal("Medium");
    setDueDate("");
  };

  //toggle complete todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((val) => {
        return val.id === id ? { ...val, completed: !val.completed } : val;
      })
    );
  };

  //formate date is completed
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  //tab filter
  const filterTodos = todos.filter((val) => {
    if (tab === "Active") return !val.completed;
    if (tab === "Completed") return val.completed;
    return true;
  });

  //sortTodo
  const sortedTodos = [...filterTodos].sort((a, b) => {
    if (a.completed === b.completed) {
      const priorityValues = { high: 3, medium: 2, low: 1 };
      return priorityValues[b.priority] - priorityValues[a.priority];
    }
    return a.completed ? 1 : -1;
  });

  //getPriorityColor
  const getPriorityColor = (priority) => {
    if (priority === "High") return "bg-red-100 text-red-800";
    if (priority === "Medium") return "bg-orange-100 text-orange-800";
    return "bg-blue-100 text-blue-800";
  };
  // this function check dueDate
  const isdueDate = (date) => {
    if (!date) return false;
    const dueDate = new Date(date);
    const today = new Date();
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 2;
  };

  //this function give Alert
  const getAlert = (date) => {
    if (!date) return false;
    const dueDate = new Date(date);
    const todayDate = new Date();
    return dueDate < todayDate;
  };

  //Update func is compaleted
  const updateTodo = (id) => {
    if (!editText.trim()) {
      toast.error("Input Field Should Not Be Empty");
      return ref();
    }
    setTodos(
      todos.map((val) => {
        return val.id === id
          ? {
              ...val,
              text: editText,
              priority: priorityVal,
              Date: dueDate || "",
            }
          : val;
      })
    );
    setShowForm(false);
    toast.success("Task Updated Successfully");
    setEditId(null);
    setEditText("");
    setDueDate("");
    setPriorityVal("Medium");
  };

  // cancel Edit is completed
  const cancelEdit = () => {
    setEditId(null);
  };

  //delete Function is completed

  const deleteTodo = (id) => {
    const data = todos.filter((val) => {
      return val.id !== id;
    });
    toast.success("Todo Deleted Successfully");
    setTodos(data);
  };

  return (
    <>
      <div className="w-full min-h-lvh  bg-gray-50 flex justify-center ">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="bg-white rounded-xl shadow-xl px-6 py-2 w-sm h-full sm:h-full  sm:w-[60vw] md:w-[70vw]  lg:max-w-2xl  mt-12">
          <h1 className="md:text-4xl text-3xl font-bold py-6 mt-2 text-gray-800  ">
            Task Manager
          </h1>
          <div>
            {showForm ? (
              <InputForm
                inputRef={inputRef}
                priority={priorityVal}
                setPriority={setPriorityVal}
                date={dueDate}
                setDate={setDueDate}
                addTodo={addTodo}
                value={inputVal}
                setValue={setInputVal}
                bg={showForm}
                form={setShowForm}
              />
            ) : (
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-3 py-2  md:px-4 md-py-2 rounded-xl cursor-pointer flex gap-1.5 items-center"
              >
                <Plus size={18} /> Add New Task
              </button>
            )}
          </div>
          <div className="flex gap-2 mt-6">
            <div
              onClick={() => setTab("All")}
              style={{
                backgroundColor: tab == "All" ? "#2563EB" : "#e5e7eb",
                color: tab === "All" ? "white" : "#4b5563",
              }}
              className="text-sm text-gray-600 px-3 py-1 cursor-pointer rounded-2xl"
            >
              All
            </div>
            <div
              onClick={() => {
                setTab("Active");
              }}
              style={{
                backgroundColor: tab == "Active" ? "#2563EB" : "#e5e7eb",
                color: tab === "Active" ? "white" : "#4b5563",
              }}
              className="text-sm text-gray-600 px-3 py-1  cursor-pointer rounded-full"
            >
              Active
            </div>
            <div
              onClick={() => {
                setTab("Completed");
              }}
              style={{
                backgroundColor: tab == "Completed" ? "#2563EB" : "#e5e7eb",
                color: tab === "Completed" ? "white" : "#4b5563",
              }}
              className="text-sm text-gray-600 cursor-pointer px-3 py-1 rounded-2xl"
            >
              Completed
            </div>
          </div>
          <div>
            {sortedTodos.length === 0 ? (
              <div className=" flex justify-center py-6 text-gray-500">
                No Task To Display
              </div>
            ) : (
              <div className="overflow-y-scroll max-h-90 mt-8 ">
                <Holder
                  inputRef={inputRef}
                  isdueDate={isdueDate}
                  getAlert={getAlert}
                  formatDate={formatDate}
                  getPriorityColor={getPriorityColor}
                  toggleTodo={toggleTodo}
                  sortedTodos={sortedTodos}
                  id={editId}
                  setEditId={setEditId}
                  deleteTodo={deleteTodo}
                  priority={priorityVal}
                  setPriority={setPriorityVal}
                  date={dueDate}
                  setDate={setDueDate}
                  addTodo={addTodo}
                  value={editText}
                  setValue={setEditText}
                  cancelEdit={cancelEdit}
                  updateTodo={updateTodo}
                />
              </div>
            )}

            <div className="mt-4 mb-2 text-sm text-gray-500 flex justify-between">
              <div>{todos.length} item lefts</div>
              {todos.length > 0 && (
                <div
                  onClick={() => {
                    const data = todos.filter((val) => {
                      return !val.completed;
                    });
                    setTodos(data);
                  }}
                  className="cursor-pointer"
                >
                  Clear Completed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
