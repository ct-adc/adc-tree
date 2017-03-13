/**
 * @author rubyisapm
 */
export default{
    getAreaNameById(id,sep) {
        var provinceId = id.substr(0, 2),
            cityId = id.length > 2 ? id.substr(0, 4) : '',
            regionId = id.length > 4 ? id.substr(0, 6) : '';

        var provinceName = provinceId !== '' ? AREA.province.filter((item)=> {
            return item.ID === provinceId;
        })[0].Name : '';
        var cityName = cityId !== '' ? AREA.city[provinceName].filter((item)=> {
            return item.ID === cityId;
        })[0].Name : '';
        var regionName = regionId !== '' ? AREA.region[cityName].filter((item)=> {
            return item.ID === regionId;
        })[0].Name : '';
        sep=sep || '-';
        if (id.length === 2) {
            return provinceName;
        } else if (id.length === 4) {
            return provinceName + sep + cityName;
        } else if (id.length == 6) {
            return provinceName + sep + cityName + sep + regionName;
        }
    },

    getNodesByName(name,sep) {
        sep=sep || '-';
        name = name.split(sep);
        var provinceName = name[0];
        var cityName = name[1];
        var regionName = name[2];
        var nodes = [];
        if (name.length === 1){
            var cities = AREA.city[provinceName];
            if(typeof cities!=='undefined' && cities.length>0){
                cities.map((city)=> {
                    var region = AREA.region[city.Name];
                    if(typeof region!=='undefined' && region.length>0){
                        nodes = nodes.concat(region);
                    }else{
                        nodes.push(city);
                    }
                })
            }
        } else if (name.length === 2) {
            nodes = AREA.region[cityName] || [];
        } else {
            var regions=AREA.region[cityName];
            if(typeof regions!=='undefined' && regions.length>0){
                nodes = AREA.region[cityName].filter((region)=> {
                    return region.Name === regionName;
                })
            }
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