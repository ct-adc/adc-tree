/**
 * @author rubyisapm
 */
import utility from 'ct-utility';
export default{
    loadNode(node, resolve, matchedByQuery) {
        if (node.level === 0) {
            if (!matchedByQuery){
                return resolve(AREA.province);
            } else {
                return resolve(AREA.province.filter(province=>{
                    const provinceID = province.ID;
                    
                    return this.isVisibleById(provinceID, matchedByQuery);
                }));
            }
        }
        if (node.level === 1 && AREA.city[node.data.Name]) {
            if (!matchedByQuery){
                return resolve(AREA.city[node.data.Name]);
            } else {
                return resolve(AREA.city[node.data.Name].filter(city=>{
                    const cityID = city.ID;

                    return this.isVisibleById(cityID, matchedByQuery);
                }));
            }
        } else if (node.level === 2 && AREA.region[node.data.Name]) {
            if (!matchedByQuery){
                return resolve(AREA.region[node.data.Name].map(item=>{item.isLeaf = true; return item;}));
            } else {
                return resolve(AREA.region[node.data.Name].filter(region=>{
                    region.isLeaf = true;
                    const regionID = region.ID;
                    
                    return this.isVisibleById(regionID, matchedByQuery);
                }));
            };
        } else {
            return resolve([]);
        }
    },
    getIdsByQueryStr(query){
        const provinceList = utility.areaDataFormat.getProvinceList();
        const cityList = utility.areaDataFormat.getCityList();
        const regionList = utility.areaDataFormat.getRegionList();
        const provinceListFiltered = provinceList.filter(item=>{
            return item.Name.indexOf(query) > -1;
        });
        const cityListFiltered = cityList.filter(item=>{
            return item.Name.indexOf(query) > -1;
        });
        const regionListFiltered = regionList.filter(item=>{
            return item.Name.indexOf(query) > -1;
        });

        return {
            province: provinceListFiltered.map(item=>item.ID),
            city: cityListFiltered.map(item=>item.ID),
            region: regionListFiltered.map(item=>item.ID)
        }
    },
    isVisibleById(id, idList){
        if ((id + '').length === 2){
            const matchProvince = idList.province.some(item=>{
                return (item + '') === (id + '');
            });
            const matchCity = idList.city.some(item=>{
                return (item + '').substr(0, 2) === (id + '');
            });
            const matchRegion = idList.region.some(item=>{
                return (item + '').substr(0, 2) === (id + '');
            });
            return matchProvince || matchCity || matchRegion;
        }
        if ((id + '').length === 4){
            const matchProvince = idList.province.some(item=>{
                return (item + '') === (id.substr(0, 2));
            });
            const matchCity = idList.city.some(item=>{
                return (item + '') === (id + '');
            });
            const matchRegion = idList.region.some(item=>{
                return (item + '').substr(0, 4) === (id + '');
            });

            return matchProvince || matchCity || matchRegion;
        }
        if ((id + '').length === 6){
            const matchProvince = idList.province.some(item=>{
                return (item + '') === (id.substr(0, 2));
            });
            const matchCity = idList.city.some(item=>{
                return (item + '') === (id.substr(0, 4));
            });
            const matchRegion = idList.region.some(item=>{
                return (item + '').substr(0, 6) === (id + '');
            });
            return matchProvince || matchCity || matchRegion;
        }
    }
}