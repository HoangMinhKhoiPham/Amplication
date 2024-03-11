import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CondoUnitList } from "./condoUnit/CondoUnitList";
import { CondoUnitCreate } from "./condoUnit/CondoUnitCreate";
import { CondoUnitEdit } from "./condoUnit/CondoUnitEdit";
import { CondoUnitShow } from "./condoUnit/CondoUnitShow";
import { PropertyList } from "./property/PropertyList";
import { PropertyCreate } from "./property/PropertyCreate";
import { PropertyEdit } from "./property/PropertyEdit";
import { PropertyShow } from "./property/PropertyShow";
import { ParkingSpotList } from "./parkingSpot/ParkingSpotList";
import { ParkingSpotCreate } from "./parkingSpot/ParkingSpotCreate";
import { ParkingSpotEdit } from "./parkingSpot/ParkingSpotEdit";
import { ParkingSpotShow } from "./parkingSpot/ParkingSpotShow";
import { LockerList } from "./locker/LockerList";
import { LockerCreate } from "./locker/LockerCreate";
import { LockerEdit } from "./locker/LockerEdit";
import { LockerShow } from "./locker/LockerShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { RegistrationKeyList } from "./registrationKey/RegistrationKeyList";
import { RegistrationKeyCreate } from "./registrationKey/RegistrationKeyCreate";
import { RegistrationKeyEdit } from "./registrationKey/RegistrationKeyEdit";
import { RegistrationKeyShow } from "./registrationKey/RegistrationKeyShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { CompanyEmployeeList } from "./companyEmployee/CompanyEmployeeList";
import { CompanyEmployeeCreate } from "./companyEmployee/CompanyEmployeeCreate";
import { CompanyEmployeeEdit } from "./companyEmployee/CompanyEmployeeEdit";
import { CompanyEmployeeShow } from "./companyEmployee/CompanyEmployeeShow";
import { UserCondoList } from "./userCondo/UserCondoList";
import { UserCondoCreate } from "./userCondo/UserCondoCreate";
import { UserCondoEdit } from "./userCondo/UserCondoEdit";
import { UserCondoShow } from "./userCondo/UserCondoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CondoService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="CondoUnit"
          list={CondoUnitList}
          edit={CondoUnitEdit}
          create={CondoUnitCreate}
          show={CondoUnitShow}
        />
        <Resource
          name="Property"
          list={PropertyList}
          edit={PropertyEdit}
          create={PropertyCreate}
          show={PropertyShow}
        />
        <Resource
          name="ParkingSpot"
          list={ParkingSpotList}
          edit={ParkingSpotEdit}
          create={ParkingSpotCreate}
          show={ParkingSpotShow}
        />
        <Resource
          name="Locker"
          list={LockerList}
          edit={LockerEdit}
          create={LockerCreate}
          show={LockerShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
        <Resource
          name="RegistrationKey"
          list={RegistrationKeyList}
          edit={RegistrationKeyEdit}
          create={RegistrationKeyCreate}
          show={RegistrationKeyShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="CompanyEmployee"
          list={CompanyEmployeeList}
          edit={CompanyEmployeeEdit}
          create={CompanyEmployeeCreate}
          show={CompanyEmployeeShow}
        />
        <Resource
          name="UserCondo"
          list={UserCondoList}
          edit={UserCondoEdit}
          create={UserCondoCreate}
          show={UserCondoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
