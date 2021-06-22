/* Work with classes, methods and selectors. */

class Component {
  static type = "SELECTOR";

  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

let duration = Date.now();

class Box extends Component {
  static type = "BOXES";

  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size;
    this.$el.style.background = options.color;
    this.$el.style.margin = options.margin;
    this.$el.onclick = function () {
      let result = setInterval(() => {
        let timer = Date.now() - duration;

        if (timer >= 2000) {
          //Small slowly transition
          clearInterval(result);
          return;
        }
        this.style.borderRadius = timer / 20 + "px";
      }, 5);
    };
  }
}

let box1 = new Box({
  selector: ".box1",
  size: "200px",
  color: "green",
  margin: "5px auto",
  radius: "50%",
});

let box2 = new Box({
  selector: ".box2",
  size: "200px",
  color: "green",
  margin: "5px auto",
  radius: "50%",
});
