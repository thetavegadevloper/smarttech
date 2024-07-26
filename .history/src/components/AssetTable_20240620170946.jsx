import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-list';
import "bootstrap/dist/css/bootstrap.min.css";
import './asset.css'
const AssetTable = ({ assets, deleteData, loading, message }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleExpand = (index) => {
    const newExpandedRows = [...expandedRows];
    if (newExpandedRows.includes(index)) {
      newExpandedRows.splice(newExpandedRows.indexOf(index), 1);
    } else {
      newExpandedRows.push(index);
    }
    setExpandedRows(newExpandedRows);
  };

  const isExpanded = (index) => {
    return expandedRows.includes(index);
  };

  return (
    <div className="table-container">
      <Table className="custom-table">
        <Thead>
          <Tr>
            <Th>Sr No</Th>
            <Th>Machine Name</Th>
            <Th>Machine Type</Th>
            <Th>Location</Th>
            <Th>QR Code</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td colSpan="8" style={{ textAlign: 'center' }}>
                <p>Loading...</p>
              </Td>
            </Tr>
          ) : (
            <>
              {message && (
                <Tr>
                  <Td
                    colSpan="8"
                    style={{
                      textAlign: 'center',
                      fontStyle: 'italic',
                      color: 'red',
                    }}
                  >
                    {message}
                  </Td>
                </Tr>
              )}
              {assets.map((asset, index) => (
                <React.Fragment key={asset._id}>
                  <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{asset.AssetName}</Td>
                    <Td>{asset.MachineType}</Td>
                    <Td>
                      <div className={`expandable-content ${isExpanded(index) ? 'expanded' : ''}`}>
                        {asset.Location}
                        {asset.qrCode && (
                          <img src={asset.qrCode} alt="QR Code" width={50} height={50} />
                        )}
                      </div>
                    </Td>
                    <Td className="expand-btn">
                      <button className="menu-btn" onClick={() => toggleExpand(index)}>
                        ⋮
                      </button>
                    </Td>
                  </Tr>
                  {isExpanded(index) && (
                    <Tr className="expanded-row">
                      <Td colSpan="3"></Td>
                      <Td colSpan="5">
                        <div className="expanded-details">
                          <p><strong>Location:</strong> {asset.Location}</p>
                          {asset.qrCode && (
                            <p><strong>QR Code:</strong> <img src={asset.qrCode} alt="QR Code" width={50} height={50} /></p>
                          )}
                          <p><strong>Edit:</strong> <NavLink to={`/editasset/${asset._id}`} style={{ color: '#000080' }}><FaEdit /></NavLink></p>
                          <p><strong>Delete:</strong> <button className="btn" onClick={() => deleteData(asset._id)} style={{ color: 'red' }}><MdDelete /></button></p>
                        </div>
                      </Td>
                    </Tr>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </Tbody>
      </Table>
    </div>
  );
};

export default AssetTable;
