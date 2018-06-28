import React from 'react';
import { Table } from 'semantic-ui-react';

const TableRes = ({ result }) => {
  result.map(user => (console.log(user)));
  return (
    <Table celled size="small" unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Navn</Table.HeaderCell>
          <Table.HeaderCell>Poeng</Table.HeaderCell>
          <Table.HeaderCell>Mål</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          result.map((user, index) => (
            <Table.Row key={user.Navn}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{user.Navn}</Table.Cell>
              <Table.Cell>{user.Poeng}</Table.Cell>
              <Table.Cell>{console.log(user)}</Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
}

export default TableRes;
