import { Notify } from "notiflix";
import createObj from "./createObj";

const render = require("./render/render").default;
const utilitiesObj = require("./utilities").default;

const BASE = "http://localhost:4000/books";

const formObject = {
  async add(e) {
    e.preventDefault();
    const data = createObj(
      [...e.target.elements].filter(
        (item) => item.tagName === "INPUT" || item.tagName === "TEXTAREA"
      )
    );
    // console.log(utilitiesObj)
    const { bool } = await utilitiesObj.checkIs(data);

    if (!bool) {
      try {
        const response = await fetch(BASE, utilitiesObj.setting("POST", data));
        await response.json();
        render();
      } catch (error) {
        Notify.failure(error);
      }
    } else {
      Notify.failure("Element is already created");
    }
  },
  async update(e) {
    e.preventDefault();
    const data = createObj(
      [...e.target.elements].filter(
        (item) => item.tagName === "INPUT" || item.tagName === "TEXTAREA"
      )
    );
    const { bool, id } = await utilitiesObj.checkIs(data);

    if (bool) {
      try {
        const response = await fetch(
          `${BASE}/${id}`,
          utilitiesObj.setting("PATCH", data)
        );
        await response.json();
        render();
      } catch (error) {
        Notify.failure(error);
      }
    } else {
      Notify.failure("Element wasn`t created");
    }
  },
  async delete(id) {
    try {
      const response = await fetch(
        `${BASE}/${id}`,
        utilitiesObj.setting("DELETE")
      );
      await response.json();
    } catch (error) {
      Notify.failure(error);
    }
  },
};

export default formObject;
//  http://localhost:4000/books
