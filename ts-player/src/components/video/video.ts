let { default: styles } = require("./video.css");

interface Ivideo {
  url: string;
  elem: string | HTMLElement;
  width?: string;
  height?: string;
  autoplay?: boolean;
}

interface Icomponent {
  tempContainer: HTMLElement;
  init: () => void;
  template: () => void;
  handle: () => void;
}

function video(options: Ivideo) {
  return new Video(options);
}

class Video implements Icomponent {
  tempContainer;
  constructor(private settings: Ivideo) {
    this.settings = Object.assign(
      {
        width: "100%",
        height: "100%",
        autoplay: false,
      },
      this.settings
    );
    this.init();
  }
  init() {
    this.template();
    this.handle();
  }
  template() {
    this.tempContainer = document.createElement("div");
    this.tempContainer.className = styles.video;
    this.tempContainer.style.width = this.settings.width;
    this.tempContainer.style.height = this.settings.height;
    this.tempContainer.innerHTML = `
      <video class="${styles["video-content"]}" src="${this.settings.url}"></video>
      <div class="${styles["video-controls"]}">
        <div class="${styles["video-progress"]}">
          <div class="${styles["video-progress-now"]}"></div>
          <div class="${styles["video-progress-suc"]}"></div>
          <div class="${styles["video-progress-bar"]}"></div>
        </div>
        <div class="${styles["video-play"]}">
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="${styles["video-time"]}">
          <span>00:00</span> / <span>00:00</span>
        </div>
        <div class="${styles["video-full"]}">
          <i class="iconfont icon-quanping"></i>
        </div>
        <div class="${styles["video-volume"]}">
          <i class="iconfont icon-yinliang"></i>
          <div class="${styles["video-volprogress"]}">
            <div class="${styles["video-volprogress-now"]}"></div>
            <div class="${styles["video-volprogress-bar"]}"></div>
          </div>
        </div>
      </div>
    `;
    if (typeof this.settings.elem === "object") {
      this.settings.elem.appendChild(this.tempContainer);
    } else {
      document
        .querySelector(`${this.settings.elem}`)
        .appendChild(this.tempContainer);
    }
  }
  handle() {
    let videoContent: HTMLVideoElement = this.tempContainer.querySelector(
      `.${styles["video-content"]}`
    );
    let videoControls = this.tempContainer.querySelector(
      `.${styles["video-controls"]}`
    );
    let videoPlay = this.tempContainer.querySelector(
      `.${styles["video-play"]} i`
    );
    let videoTimes = this.tempContainer.querySelectorAll(
      `.${styles["video-time"]} span`
    );
    let videoFull = this.tempContainer.querySelector(
      `.${styles["video-full"]} i`
    );
    let videoProgress = this.tempContainer.querySelectorAll(
      `.${styles["video-progress"]} div`
    );
    let timer;

    videoContent.addEventListener("canplay", () => {
      // console.log("canplay");
      videoTimes[1].innerHTML = formatTime(videoContent.duration);
    });
    videoContent.addEventListener("play", () => {
      videoPlay.className = "iconfont icon-pause-full";
      timer = setInterval(playing, 1000);
    });
    videoContent.addEventListener("pause", () => {
      videoPlay.className = "iconfont icon-bofang";
      clearInterval();
    });
    videoPlay.addEventListener("click", () => {
      if (videoContent.paused) {
        videoContent.play();
      } else {
        videoContent.pause();
      }
    });

    videoFull.addEventListener("click", () => {
      videoContent.requestFullscreen();
    });

    function playing() {
      let scale = videoContent.currentTime / videoContent.duration;
      let scaleSuc = videoContent.buffered.end(0) / videoContent.duration;
      videoTimes[0].innerHTML = formatTime(videoContent.currentTime);
      videoProgress[0].style.width = scale * 100 + "%";
      videoProgress[2].style.left = scale * 100 + "%";
      videoProgress[1].style.width = scaleSuc * 100 + "%";
    }

    function formatTime(number: number): string {
      number = Math.round(number);
      let min = Math.floor(number / 60);
      let sec = number % 60;
      return `${setZero(min)}:${setZero(sec)}`;
    }
    function setZero(number: number): string {
      if (number < 10) {
        return `0${number}`;
      } else {
        return `${number}`;
      }
    }
  }
}

export default video;
