import Image from "next/image";
import React from "react";

export default function ProductDescription(props) {
  console.log(props);
  return (
    <div className="product-description-wrapper container">
      <h4>Product Description</h4>
      {props.data.logo && (
        <div className="logo">
          <Image src={props.data.logo} width={200} height={200} alt=""></Image>
        </div>
      )}
      {props.data.banner_images && (
        <div className="add-wrapper">
          {props.data.banner_images.map((d, i) => {
            return (
              <div className="image-wrapper mb-2" key={i}>
                <Image src={d} width={40} height={200} alt=""></Image>
              </div>
            );
          })}
        </div>
      )}
      {props.data.core_description && (
        <div className="core-wrapper row">
          {props.data.core_description.map((d, i) => {
            return (
              <div key={i} className="col-sm-6 col-lg-3 col-12 wrapper">
                <div className="img-wrapper">
                  <Image src={d.img} width={300} height={300} alt=""></Image>
                </div>
                <h6>{d.title}</h6>
                <p>{d.description}</p>
              </div>
            );
          })}
        </div>
      )}
      {props && props.variants_data && props.variants_data.length > 1 ? (
        <div className="variant-table">
          <h4>Variants Comparision</h4>
          <table cellSpacing="0" cellPadding="0">
            <tbody>
              <tr>
                <th></th>
                {props.variants_data.map((d, i) => (
                  <th key={i}>
                    <Image
                      alt="1631"
                      src={d.displayImage}
                      height={200}
                      width={200}
                    ></Image>
                  </th>
                ))}
              </tr>
              <tr>
                <th></th>
                {props.variants_data.map((d, i) => (
                  <th key={i}>{props.title}</th>
                ))}
              </tr>
              <tr>
                <th>
                  <span className="text-header"> PRICE </span>
                </th>
                {props.variants_data.map((d, i) => (
                  <td key={i}>
                    {" "}
                    <span className="p-0">
                      {`Rs. ${d.salePrice}`}{" "}
                      <strike className="p-0">{d.price}</strike>
                    </span>{" "}
                  </td>
                ))}
              </tr>
              <tr>
                <th>
                  <span className="text-header"> COLOR </span>
                </th>
                {props.variants_data.map(d, (i) => (
                  <td>
                    <span className="p-0"> {d.color} </span>{" "}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
