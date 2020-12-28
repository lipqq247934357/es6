const aaaa = [
    {
      "subject": 5,
      "score": 12,
      "totalScore": 100,
      "allowDelete": false,
      "targetScore": 66,
      "enrollOtherSubclass": 3,
      "boughtFullPrice": true,
      "subjectWeakness": ""
    },
    {
      "subject": 1,
      "score": null,
      "totalScore": 100,
      "allowDelete": false,
      "targetScore": null,
      "enrollOtherSubclass": 2,
      "boughtFullPrice": true,
      "subjectWeakness": ""
    },
    {
      "subject": 4,
      "score": null,
      "totalScore": 100,
      "allowDelete": false,
      "targetScore": null,
      "enrollOtherSubclass": 0,
      "boughtFullPrice": true,
      "subjectWeakness": ""
    }
  ]
  
  const bbbb = [
    {
      "subject": 5,
      "score": 12,
      "targetScore": 66,
      "totalScore": 100,
      "subjectWeakness": "",
      "enrollOtherSubclass": 3
    },
    {
      "subject": 1,
      "totalScore": 100,
      "subjectWeakness": "",
      "enrollOtherSubclass": 2
    },
    {
      "subject": 4,
      "totalScore": 100,
      "subjectWeakness": ""
    }
  ];

  const ccc = aaaa.map(item => {
      delete item.boughtFullPrice;
      delete item.allowDelete;
      Object.keys(item).forEach(key => {
        item[key] = item[key] === null ? undefined : item[key];
    });
    return item;
  });

  console.log(ccc);