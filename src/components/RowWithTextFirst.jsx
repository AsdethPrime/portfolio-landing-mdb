import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
  } from "mdb-react-ui-kit";

function RowWithTextFirst({ cardConfig }) {
  const description = cardConfig.description || [];
  return (
    <MDBContainer>
      <MDBRow className="my-4">
        <h3 className="text-center text-primary border-primary">{cardConfig.title}</h3>
        <MDBCol size="md">
          <MDBCard style={{ height: cardConfig.height }}>
            <MDBCardBody className="text-white" style={{backgroundColor: 'darkblue'}}>
              {description.map((descriptionText) => (
                <li key={descriptionText}>{descriptionText}</li>
              ))}
            </MDBCardBody>
            <MDBBtn block onClick={cardConfig.onClick}>
              Open {cardConfig.title}
            </MDBBtn>
          </MDBCard>
        </MDBCol>
        <MDBCol size="md">
          <MDBCard>
            <MDBCardImage
              src={cardConfig.image}
              style={{ height: cardConfig.height }}
            />
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RowWithTextFirst;
