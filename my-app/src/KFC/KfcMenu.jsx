import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./KfcMenu.css";

function KfcMenu() {
  const [first, setfirst] = useState([
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-new8pcTenders?q=75",
      title: "SPECIAL OFFERS",
    },
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo?q=75",
      title: "COMBOS",
    },
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-FamilyMealCategory?q=75",
      title: "FAMILY MEALS",
    },
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-Wraps2for5NEW?q=75",
      title: "WRAPS",
    },
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-4pcCombo?q=75",
      title: "FRIED CHICKEN",
    },
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-12pcNuggetsComboV2?q=75",
      title: "NUGGETS",
    },
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndalc?q=75",
      title: "SANDWICHES",
    },
    {
      img: "https://digitaleat.kfc.com/menus/image/bare/kfc-TendersCombo?q=75",
      title: "TENDERS",
    },
  ]);

  return (
    <div >
      <Container>
        <h2 style={{ fontWeight: "bolder" }}>KFC MENU</h2>
      </Container>
      <Container className="wrapper">
        <div>
          <p>ONLINE ONLY</p>
          <h2>9$ BIG BOX</h2>
          <p>That's one finger lickin' good Big Box for only $9.</p>
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/9tka4b3550oc/4ipLxYF32iJ20kUwmUzd8G/bca0ca1e0b60637e8890cd3169b24d24/Image___Lockup.png"
            alt=""
          />
        </div>
      </Container>

      <Container className="kfcGrid">
        {first.map((disp) => (
          <Card
            style={{ width: "18rem", marginTop: "60px" }}
            className="KfcCard"
          >
            <img src={disp.img} />
            <Card.Body>
              <Card.Title>{disp.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Container>

      <div className="footer my-5 py-5">
        <Container className="footerpara">
          <p>Calorie Statement</p>
          <p>
            2,000 calories a day is used for general nutrition advice, but
            calorie needs vary. Additional nutrition information available upon
            request in-store and on kfc.com. Prices, participation, and product
            availability may vary. For allergen information, visit our Special
            Diets page. We prepare and serve products containing egg, milk, soy,
            wheat or other allergens. Our products are prepared on shared
            equipment and in the same kitchen area and we cannot guarantee that
            cross contact with allergens will not occur.
          </p>
          <p>
            Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Starry are
            registered trademarks of PepsiCo, Inc. Dr Pepper is a registered
            trademark of Dr Pepper/Seven Up, Inc
          </p>
        </Container>

        <Container style={{color:"white"}} className="my-5 footerlist">
            <Row>
                <Col sm={3}>
                    <b>KFC FOOD</b>
                    <p>Menu</p>
                    <p>Full Nutriotion Guide</p>
                    <p>Nutrition Calculator</p>
                    <p>Food Allergies and Sensitivities</p>
                    
                </Col>
                <Col sm={3}>
                    <b>Company</b>
                    <p>About Kfc</p>
                    <p>How We make chicken</p>
                    <p>Foundation</p>
                    <p>Company Responsbility</p>
                    <p></p>
                </Col>

                <Col sm={3}>
                    <b>Careers</b>
                    <p>Restaurent careers</p>
                    <p>Corporate Careers</p>
                    <p>Culture</p>
                    <p>Growth</p>
                </Col>

                <Col sm={3}>
                    <b>Resources</b>
                    <p>FAQs</p>
                    <p>Conact us</p>
                    <p>KFC App</p>
                </Col>
            </Row>
            
    </Container>
      </div>

      <div className="animation">
          <div>

          </div>

          <div>

          </div>

          <div>
            
          </div>
      </div>

    </div>
  );
}

export default KfcMenu;
