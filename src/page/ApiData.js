import React, { useContext } from "react";
import { ContextData } from '../Context/Context';

export default function ApiData() {
  let { apiData, search } = useContext(ContextData);
  console.log(apiData.products);
  return (<div>
    <div className="boxGrid">
      {apiData?.products?.filter((item) => {
        if (
          item?.title?.toLowerCase()?.trim()?.includes(search?.toLowerCase()?.trim()) || item?.brand?.toLowerCase()?.trim()?.includes(search?.toLowerCase()?.trim())
        ) {
          return item;
        }
      })
        .map((elem, i) => (
          <div className="card" key={elem.id}>
            <img src={elem.thumbnails} className="card-img-top" alt={elem?.title}
              title={elem.title} />   <div className="card-body">
              <h2 className="card-title">{elem?.title}</h2>
              <h5 className="card-title">{elem?.brand}</h5>
              <p className="card-text">{elem?.category}</p>
              <p className="card-text">{elem?.price}</p>

              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
              <div style={{ textAlign: "right" }}>{i + 1}</div>
            </div>
          </div>
        ))
      }
    </div>
  </div>);
}