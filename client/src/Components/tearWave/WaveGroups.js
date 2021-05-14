import {
  Wave
} from './Wave.js';

export class WaveGroups {
  constructor() {
    //파도각각의 설정
    this.totalWaves = 3;
    this.totalPoints = 6;
    //파도 각각의 색깔
    this.color = ['rgba(149, 189, 188, 1)', 'rgba(149, 189, 188, 0.4)', 'rgba(149, 189, 188, 0.8)'];
    //각각의 파도를 담을 배열
    this.waves = []; 
    //각각의 파도를 만든 뒤 배열안에 파도를 담는다
    for(let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }
  //각각의 파도에 너비와 높이를 전달해 준다
  resize(stageWidth, stageHeight) {
    for(let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }
  //각각의 파도를 그린다
  draw(ctx) { 
    for(let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}