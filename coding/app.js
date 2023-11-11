const canvas = document.getElementById("canvas");
const tooltip = document.getElementById("tooltip");
const ctx = canvas.getContext("2d");

const data = [
  { year: "2020-01-01", amount: 50 },
  { year: "2020-02-01", amount: 80 },
  { year: "2020-03-01", amount: 100 },
  { year: "2020-04-01", amount: 70 },
  { year: "2020-05-01", amount: 60 },
  { year: "2020-06-01", amount: 90 },
  { year: "2020-07-01", amount: 120 },
  { year: "2020-08-01", amount: 150 },
  { year: "2020-09-01", amount: 180 },
  { year: "2020-10-01", amount: 100 },
  { year: "2020-11-01", amount: 80 },
  { year: "2020-12-01", amount: 50 },
];

const colors = ["red", "green", "blue"];

const xLabel = "年月日";
const yLabel = "金额（万元）";

const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = canvas.width - margin.left - margin.right;
const height = canvas.height - margin.top - margin.bottom;

const xScale = d3.scaleBand().range([0, width]).padding(0.1);
const yScale = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom(xScale).tickValues([]);
const yAxis = d3.axisLeft(yScale);

function drawAxes(data) {
  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 计算x轴刻度及数据范围
  let years = data.map((d) => d.year);
  xScale.domain(years);
  let minAmount = d3.min(data, (d) => d.amount) / 10000;
  let maxAmount = d3.max(data, (d) => d.amount) / 10000;

  // 计算y轴刻度
  let ticks;
  if (maxAmount - minAmount > 5) {
    ticks = yScale.ticks(5);
  } else {
    ticks = yScale.ticks(maxAmount - minAmount);
  }
  yScale.domain([0, d3.max(ticks)]);

  // 画x轴
  ctx.beginPath();
  ctx.moveTo(margin.left, margin.top + height);
  ctx.lineTo(margin.left + width, margin.top + height);
  ctx.strokeStyle = "black";
  ctx.stroke();

  // 画x轴刻度及对应的日期
  ctx.fillStyle = "black";
  ctx.font = "12px Arial";
  for (let i = 0; i < years.length; i++) {
    let x = margin.left + xScale(years[i]) + xScale.bandwidth() / 2;
    let y = margin.top + height + 20;
    ctx.fillText(years[i], x, y);
    ctx.beginPath();
    ctx.moveTo(x, margin.top + height);
    ctx.lineTo(x, margin.top + height + 5);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  // 画y轴
  ctx.beginPath();
  ctx.moveTo(margin.left, margin.top);
  ctx.lineTo(margin.left, margin.top + height);
  ctx.strokeStyle = "black";
  ctx.stroke();

  // 画y轴刻度及对应的金额
  ctx.fillStyle = "black";
  ctx.font = "12px Arial";
  for (let i = 0; i < ticks.length; i++) {
    let x = margin.left - 30;
    let y = margin.top + yScale(ticks[i]);
    ctx.fillText(ticks[i], x, y + 5);
    ctx.beginPath();
    ctx.moveTo(margin.left, y);
    ctx.lineTo(margin.left - 5, y);
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  // 画三条曲线
  for (let i = 0; i < 3; i++) {
    let values = data.map((d) => d.amount / 10000);
    let line = d3
      .line()
      .x((d, i) => margin.left + xScale(years[i]) + xScale.bandwidth() / 2)
      .y((d) => margin.top + yScale(d));
    ctx.beginPath();
    line.context(ctx)(values);
    ctx.strokeStyle = colors[i];
    ctx.stroke();
  }
}

function showTooltip(x, y, data) {
  tooltip.innerHTML = `${data.year}: ${data.amount}万元`;
  tooltip.style.display = "block";
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideTooltip() {
  tooltip.style.display = "none";
}

canvas.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  x -= canvas.getBoundingClientRect().left;
  y -= canvas.getBoundingClientRect().top;
  for (let i = 0; i < 3; i++) {
    let values = data.map((d) => d.amount / 10000);
    let line = d3
      .line()
      .x((d, i) => margin.left + xScale(d.year) + xScale.bandwidth() / 2)
      .y((d) => margin.top + yScale(d));
    let coords = line.curve(d3.curveCardinal)(values);
    for (let j = 0; j < coords.length; j++) {
      let dx = coords[j][0] - x;
      let dy = coords[j][1] - y;
      if (dx * dx + dy * dy < 25) {
        showTooltip(coords[j][0], coords[j][1], data[j]);
        return;
      }
    }
  }
  hideTooltip();
});

drawAxes(data);