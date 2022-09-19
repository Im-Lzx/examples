/**
 * 生成路由map
 * @param {object} paths 路由路径关系
 * @return {array} 路由表
 */
export const createRouterMaps = function (paths) {
  return Object.keys(paths).reduce((maps, cur) => {
    let fileName = /\/(\w+)\.vue/.exec(cur)[1];

    maps.push({
      path: `/${fileName}`,
      name: fileName,
      component: paths[cur],
    });
    return maps;
  }, []);
};

export default {
  createRouterMaps,
};
