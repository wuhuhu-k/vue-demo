export default function handleScreenAuto(id) {
  const designDraftWidth = 1920 //设计稿的宽度
  const designDraftHeight = 1080 //设计稿的高度
  // 根据屏幕的变化适配的比例
  const scale =
    document.documentElement.clientWidth / document.documentElement.clientHeight <
    designDraftWidth / designDraftHeight
      ? document.documentElement.clientWidth / designDraftWidth
      : document.documentElement.clientHeight / designDraftHeight
  // 缩放比例
  document.querySelector(id).style.transform = `scale(${scale}) translate(-50%, -50%)`
}
