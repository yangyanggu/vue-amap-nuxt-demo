export async function initMapApi(){
  const amap = await import('@vuemap/vue-amap');
  amap.initAMapApiLoader({
    key: '747f980f217a31ba68d99301045a3fa7',
  })
}
