// here i will create the testState of context to be available every wehre
import TestConext from "./testContext";

const TestState = (props) => {
  const Name = "Muhammad Abbas";
  const Age = 40;
  const CompanyName = "UnderCover";
  const dataDisplay = () => {
    // console.log("i m in data Display")
    return "Muhammad Abbas";
  };

  return (
    <TestConext.Provider value={{ Name, Age, CompanyName, dataDisplay }}>
      {props.children}
    </TestConext.Provider>
  );
};

export default TestState;
