import { useRef, useState } from "react";
import "./App.css";
import { ListItem } from "./ListItem";

function App() {
  const [elements, setElements] = useState([
      { id: "1", title: "title1" },
      { id: "2", title: "title2" },
      { id: "3", title: "title3" },
  ]);
  const [idCounter, setIdCounter] = useState(0);
  const addInput = useRef(null);

  const onAdd = (title) => {
      const newElements = elements.slice();
      newElements.unshift({ id: idCounter, title: title });
      setIdCounter("li-" + (idCounter + 1));
      setElements(newElements);
  };
  const onDelete = (id) => {
      const newElements = elements.slice();
      for (let i = 0; i < newElements.length; i++) {
          if (newElements[i].id === id) {
              newElements.splice(i, 1);
          }
      }
      setElements(newElements);
  };
  const onEdit = (id, newTitle) => {
      const newElements = elements.slice();
      for (let i = 0; i < newElements.length; i++) {
          if (newElements[i].id === id) {
              newElements[i].title = newTitle;
          }
      }
      setElements(newElements);
  };
  return (
      <div class="main">
          <h1>
              <span>NOT</span>
              <span>todo</span>
              <span>LIST</span>
          </h1>
          <ol id="instructions">
              <li>Write down things not to do.</li>
              <li>
                  If someone asks you to do said thing, just reply with: "Sorry,
                  but that's on my Not Todo List."
              </li>
              <li>
                  If you successfully avoided doing said thing, cross it of your
                  list.
              </li>
          </ol>
          <form action="">
              <p>What are you NOT doing today:</p>
              <div class="inputArea shadow">
                  <input
                      type="text"
                      name="task"
                      id="task"
                      placeholder="your Task"
                      ref={addInput}
                  />

                  <button
                      id="add"
                      onClick={(e) => {
                          e.preventDefault();
                          onAdd(addInput.current.value);
                          addInput.current.value =  "";
                      }}
                  >
                      Add
                  </button>
              </div>
          </form>
          <div>
              <p>Things not to do:</p>
              <ul id="task-list">
                  {elements.map((element) => (
                      <ListItem
                          key={element.id}
                          id={element.id}
                          title={element.title}
                          onEdit={(id, title) => onEdit(id, title)}
                          onDelete={() => {
                              onDelete(element.id);
                          }}
                      />
                  ))}
              </ul>
          </div>
          <i class="license">
              icons by fontawesome -{" "}
              <a href="https://fontawesome.com/license">license</a>
          </i>
      </div>
  );
}

export default App;
