/**
 * @author rubyisapm
 */
import utility from 'ct-utility';
export default {
    isIdList(areaList){
        return /^\d+$/.test(areaList[0] + '');
    },
    resolveAreaList(areaToAdd){
        let areaList;

        if (typeof(areaToAdd) === 'string') {
            if (!/^\s*$/.test(areaToAdd)) {
                try {
                    areaList = JSON.parse(areaToAdd);
                } catch (e) {
                    areaList = areaToAdd.split(/,|，/);
                }
            } else {
                areaList = [];
            }
        } else {
            areaList = areaToAdd;
        }
        return areaList;
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