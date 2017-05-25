/**
 * @author rubyisapm
 */
import utility from 'ct-utility';
export default{
    getNodesById:function(id){
        var areaName=utility.areaDataFormat.getAreaNameById(id);
        return this.getNodesByName(areaName);
    },

    /**
     *
     * @param name
     * @returns {Array}
     * 备注: 没有一个城市都没有省，但是有一个区都没有的城市
     */
    getNodesByName: function(name) {
        var nameArr = name.split(/[^\u4e00-\u9fa5]+/),
            provinceName = nameArr[0],
            cityName = nameArr[1],
            regionName = nameArr[2],
            cities,
            regions,
            nodes = [];
        if (utility.areaDataFormat.areaType(name) === 'province') {
            cities = utility.areaDataFormat.getCitiesOfProvinceName(provinceName);
            cities.map(function(city) {
                regions = utility.areaDataFormat.getRegionsOfCityName(city.Name);
                if (regions.length === 0) {
                    nodes = nodes.concat(city);
                } else {
                    nodes = nodes.concat(regions);
                }
            });
        } else if (utility.areaDataFormat.areaType(name) === 'city') {
            cities = utility.areaDataFormat.getCitiesOfProvinceName(provinceName);
            regions = utility.areaDataFormat.getRegionsOfCityName(cityName);
            if (regions.length === 0) {
                nodes = cities.filter(function(city) {
                    return city.Name === cityName;
                });
            } else {
                nodes = regions;
            }
        } else {
            regions = utility.areaDataFormat.getRegionsOfCityName(cityName);
            nodes = regions.filter(function(region) {
                return region.Name === regionName;
            });
        }
        return nodes;
    },

    loadNode(node, resolve) {
        if (node.level === 0) {
            return resolve(AREA.province);
        }
        if (node.level === 1 && AREA.city[node.data.Name]) {
            return resolve(AREA.city[node.data.Name])
        } else if (node.level === 2 && AREA.region[node.data.Name]) {
            return resolve(AREA.region[node.data.Name])
        } else {
            return resolve([]);
        }
    }
}