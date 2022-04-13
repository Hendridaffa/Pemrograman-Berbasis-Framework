import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h2 align="center">About Me</h2> <br></br>
                <table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
                    <tr>
                        <td><strong>Founder Kace Hardware</strong></td>
                    </tr>
                    <tr>
                        <td>Nama :</td>
                        <td>Hendri Daffa Athaya</td>
                        <td rowspan="10" align="center"><img src="./images/hendri.JPG"  width="280" height="313"/></td>
                    </tr>
                    <tr>
                        <td>Jurusan :</td>
                        <td>Teknologi Informasi</td>
                    </tr>
                    <tr>
                        <td>Kelas :</td>
                        <td>TI-3C</td>
                    </tr>
                    <tr>
                        <td>NIM :</td>
                        <td>1941720199</td>
                    </tr>
                    <tr>
                        <td>GitHub :</td>
                        <td>https://github.com/Hendridaffa</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About;