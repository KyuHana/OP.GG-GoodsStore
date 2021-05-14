import {
  WaveGroups
} from './WaveGroups';

class App {
  constructor() {
    const canvasContainer = document.querySelector(".aaaa");
    this.canvas = document.createElement("canvas"); //document.querySelector('.asdf');
    this.ctx = this.canvas.getContext('2d');
    canvasContainer.appendChild(this.canvas);
    //그림을 그릴 수 있는 캔버스를 생성

    this.WaveGroups = new WaveGroups();

    this.resize();

    requestAnimationFrame(this.animate.bind(this));
    //애니메이션을 시작
  }
  resize() {
    this.stageWidth = 640;
    this.stageHeight = 140;
    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;
    this.ctx.scale(1, 1);
    //캔버스의 크기를 맞추어준다

    this.WaveGroups.resize(this.stageWidth, this.stageHeight);
  }
  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.WaveGroups.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this)); //반복실행
  }
}

window.onload = () => { //실행
  new App();
}