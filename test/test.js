const DataService = require('../service/service');

test('testing .', () => {
    const service = new service();
    service.filterData({ "startDate": "2016-01-26", "endDate": "2018-02-02" , "minCount": 2800, "maxCount": 3000 })
        .then(result => {
            expect(result.code).toBe(0);
            expect(result.msg).toBe('Success');
        });
});