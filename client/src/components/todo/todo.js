import React from "react";
import "./todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo} from "../../store/todosSlice";

export default function Todo(props) {
  
  const { data } = props;
  const dispatch = useDispatch();


  const clickHandler = async (e) => {    ;
    dispatch(deleteTodo(data.todo_id));
  };

  return (
    <div>
      <div className="accordion my-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className='buttonP'>{data.todo_name}</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <div className="content">
                <p className='desc text-center '><strong>Description</strong></p>
                <p className='text-center'> {data.todo_description}</p>
              </div>
              <div className="p-1 text-center">
                <button
                  type="button"
                  className="btn btn-danger my-2"
                  onClick={clickHandler}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
