import cloneDeep from 'lodash/cloneDeep';


const baseSchema = {
  "country": {
    "country_code": "143",
    "risk_level": 7,
    "country_desc": "Trinidad & Tobago"
  },
  "occupation": {
    "risk_level": 10,
    "occ_name": "",
    "occ_type": 6
  },
  "mail_to": true,
  "birth_date": "",
  "birth_country": "143",
  "id_no": "",
  "e_mail": "",
  "employer": {
    "emp_zip_code": 1,
    "emp_add1": "emp_add1",
    "employer": "employer",
    "employer_phone": "employer_phone",
    "employer_ext": "employer_ext",
    "emp_add3": "emp_add3",
    "emp_add2": "emp_add2",
    "emp_add5": "emp_add5",
    "employer_fax": "employer_fax",
    "emp_add4": "emp_add4"
  },
  "cat_code": 9,
  "longitude": "47.2010",
  "emp_zip_code": 12341,
  "home_phone": "",
  "home_add1": "",
  "home_add2": "",
  "home_add3": "",
  "monthly_income": "0",
  "home_add4": "",
  "mail_add5": "mail_add5",
  "home_add5": "0",
  "mail_add4": "mail_add4",
  "mail_add3": "mail_add3",
  "mail_add2": "mail_add2",
  "permit_no": "",
  "cell_phone": "",
  "mail_add1": "mail_add1",
  "zipcode": "00000",
  "f_name": "",
  "position": "",
  "salutation": "Mr",
  "org_code": 3,
  "status": {
    "notify_type": 6,
    "set_review": 1,
    "status_code": "34",
    "status_desc": "Active",
    "log_code": 5
  },
  "add_date": "",
  "group_code": 6,
  "city": {
    "risk_level": 5,
    "status_date": "status_date",
    "city_zone": "",
    "city_status": 2,
    "city_code": "44",
    "city_desc": "Port of Spain"
  },
  "l_name": "",
  "latitude": "10.4763",
  "phones": [
    {
      "phone_no": "phone_no",
      "phone_type": 2,
      "provider_code": "provider_code",
      "phone_source": 4
    },
    {
      "phone_no": "phone_no",
      "phone_type": 2,
      "provider_code": "provider_code",
      "phone_source": 4
    }
  ],
  "vat_reg": "vat_reg",
  "issue_date": "",
  "risk_rating": 6,
  "id_type": 1,
  "mail_zip_code": 1,
  "sex": "M",
  "expiry_date": "",
  "staff": 8,
  "home_zip_code": 1,
  "permit_class": "T",
  "alt_phone": "alt_phone",
  "pep_code": 9,
  "credit_rating": 4,
  "marital_status": 5,
  "m_name": "",
  "vip_status": 9,
  "ar_terms": {
    "terms_desc": "terms_desc",
    "terms_days": 3,
    "terms_code": 9
  },
  "emp_e_mail": ""
}
const Customer = (data) => {
  const newCust = cloneDeep(baseSchema);

  Object.keys(data).map(key => {
    console.log(key)
    if (key in baseSchema) {
      newCust[key] = data[key];
    }
  });

  return newCust;
}

export default Customer;