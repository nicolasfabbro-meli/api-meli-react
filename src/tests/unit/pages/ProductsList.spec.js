import React from 'react';
import Component from '../../../pages/products-list';
import { saveSearch, removeSavedSearch } from '../../../utils';
// import MeliService from '../../../services/meli';

// jest.mock('../../../services/meli', () => ({
//   search: jest.fn(() => ({
//     site_id: "MLA",
//     query: "Motorola G6",
//     paging: {
//       total: 916,
//       offset: 0,
//       limit: 50,
//       primary_results: 916
//     },
//     results: [
//       {
//         id: "MLA810645375",
//         site_id: "MLA",
//         title: "Motorola G6 Plus 64 Gb Nimbus",
//         seller: {
//           id: 143125485,
//           power_seller_status: "platinum",
//           car_dealer: false,
//           real_estate_agency: false,
//           tags: []
//         },
//         price: 17999,
//         currency_id: "ARS",
//         available_quantity: 100,
//         sold_quantity: 0,
//         buying_mode: "buy_it_now",
//         listing_type_id: "gold_special",
//         stop_time: "2039-08-17T04:00:00.000Z",
//         condition: "new",
//         permalink: "https://www.mercadolibre.com.ar/p/MLA9452524",
//         thumbnail: "http://mla-s2-p.mlstatic.com/795558-MLA31003306206_062019-I.jpg",
//         accepts_mercadopago: true,
//         installments: {
//           quantity: 12,
//           amount: 2456.41,
//           rate: 63.77,
//           currency_id: "ARS"
//         },
//         address: {
//           state_id: "AR-C",
//           state_name: "Capital Federal",
//           city_id: "TUxBQkJBTDMxMDZa",
//           city_name: "Balvanera"
//         },
//         shipping: {
//           free_shipping: false,
//           mode: "custom",
//           tags: [],
//           logistic_type: "custom",
//           store_pick_up: true
//         },
//         seller_address: {
//           id: "",
//           comment: "",
//           address_line: "",
//           zip_code: "",
//           country: {
//             id: "AR",
//             name: "Argentina"
//           },
//           state: {
//             id: "AR-C",
//             name: "Capital Federal"
//           },
//           city: {
//             id: "TUxBQkJBTDMxMDZa",
//             name: "Balvanera"
//           },
//           latitude: "",
//           longitude: ""
//         },
//         attributes: [
//           {
//             name: "Marca",
//             value_id: "2503",
//             value_name: "Motorola",
//             value_struct: null,
//             attribute_group_id: "OTHERS",
//             attribute_group_name: "Otros",
//             source: 1,
//             id: "BRAND"
//           },
//           {
//             attribute_group_name: "Otros",
//             source: 1,
//             id: "CPU_MODEL",
//             name: "Modelo de CPU",
//             value_id: "7070889",
//             value_name: "4x2.2 GHz Cortex-A53/4x1.8 GHz Cortex-A53",
//             value_struct: null,
//             attribute_group_id: "OTHERS"
//           },
//         ],
//         original_price: null,
//         category_id: "MLA1055",
//         official_store_id: 229,
//         catalog_product_id: "MLA9452524",
//         tags: [
//           "brand_verified",
//           "extended_warranty_eligible",
//           "good_quality_picture",
//           "good_quality_thumbnail",
//           "immediate_payment"
//         ],
//         catalog_listing: true
//       }
//     ]
//   }))
// }));

jest.mock('../../../utils', () => ({
  saveSearch: jest.fn(),
}));

describe('ProductsList page', () => {
  it('Should render', () => {
    const component = shallow(<Component />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  // it('Should set state and save data', async () => {
  //   const component = shallow(<Component />);
  //   const instance = component.instance();
    
  //   await instance.handleSearch('__TERM__');
  //   expect(saveSearch).toHaveBeenCalled();
  //   expect(component.state().results[0].id).toEqual('MLA810645375');
  //   expect(component.state().searchTerms).toEqual('__TERM__');
  // });
});