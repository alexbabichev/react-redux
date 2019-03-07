import React, { Component } from 'react';

interface Props {

}

class SearchDoc extends Component<Props> {

  render() {
    return (
      <section className="Base">
        <header className="BaseHeader">
          <h1>Issued Documents</h1>
        </header>
        <section className="BaseContent">
          <form className="BaseForm">
            <p className="Label">Search for existing documents</p>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Document ID" value="" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Document Holder" value="" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Document Name" value="" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Issue Date" value="" />
            </div>
            <button className="btn btn-lg btn-primary">Submit</button>
          </form>
        </section>
      </section>
    )
  }
}

export default SearchDoc;