import React from "react";
import "./KfcRewards.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function KfcRewards() {
  return (
    <div className="rewardStyle my-5">
      <div style={{ width: "30%" }}>
        <img
          src="https://images.ctfassets.net/9tka4b3550oc/2cUN8MduVoNvlRaBLvMqig/a60b434f992b518aa7c5c49907bc3641/Untitled-1_4.png?q=75"
          alt=""
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>

      <div className="text-center" style={{ width: "40%" }}>
        <h2 style={{ fontSize: "50px" }}>
          KFC <br />
          REWARDS
        </h2>
        <p>
          KFC Rewards are almost here! Finger lickin' good deals, exclusive
          member-only perks, and more will be a tap away. Be the first to get
          rewarded for your love of KFC! We will notify you via email when KFC
          Rewards is available.
        </p>
        <Button style={{ padding: "5px 20px", borderRadius: "20px" }}>
          Notify me
        </Button>
      </div>

      <div style={{ width: "30%" }}>
        <img
          src="https://images.ctfassets.net/9tka4b3550oc/2cUN8MduVoNvlRaBLvMqig/a60b434f992b518aa7c5c49907bc3641/Untitled-1_4.png?q=75"
          alt=""
          style={{ width: "80%", height: "400px", objectFit: "cover" }}
        />
      </div>

      <Container>
        <Row className="row1 my-5 text-center">
          <Col md={6} sm={12}>
            <h1>EARN POINTS ON EVERY PURCHASE</h1>
            <p>
              As a KFC Rewards member you now automatically earn 10 points on
              every dollar you spend at KFC.
            </p>
          </Col>

          <Col md={6} sm={12}>
            <img
              src="https://images.ctfassets.net/9tka4b3550oc/7ueCxy7usXnf7LLYwG2luE/02b540f995a0eab7db013e8c815fc37e/slide2.png?q=75"
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="row1 my-5 text-center">
          <Col md={6} sm={12}>
            <img
              src="https://images.ctfassets.net/9tka4b3550oc/lihZjRvlgowdojTuo6ot3/bbb80e0dc120f95dc78cd0a7111292ab/slide4.png?q=75"
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Col>

          <Col md={6} sm={12}>
            <h1>GET REWARDED FOR YOUR LOVE OF KFC</h1>
            <p>
              Redeem your points for finger lickin’ good Rewards in the Secret
              Recipe Vault. Rewards are always rotating, which means there’s
              always something new & delicious to discover.
            </p>
          </Col>
        </Row>
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

    </div>
  );
}

export default KfcRewards;
