import React from 'react';
// @ts-ignore
import {HomePage, LoginPage, SongListPage, SignupPage, SearchPage} from "@dse.spotify/spotify-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '@dse.spotify/scss/src/lib/button.css';
import '@dse.spotify/scss/src/lib/textButton.css';
import '@dse.spotify/scss/src/lib/utility.css';
import '@dse.spotify/scss/src/lib/link.css';
import '@dse.spotify/scss/src/lib/icon.css';
import '@dse.spotify/scss/src/lib/stack.css';
import '@dse.spotify/scss/src/lib/divider.css';
import '@dse.spotify/scss/src/lib/header.css';
import '@dse.spotify/scss/src/lib/footer.css';
import '@dse.spotify/scss/src/lib/body.css';
import '@dse.spotify/scss/src/lib/card.css';
import '@dse.spotify/scss/src/lib/navBarLogin.css';
import '@dse.spotify/scss/src/lib/global.css';
import '@dse.spotify/scss/src/lib/textField.css';
import '@dse.spotify/scss/src/lib/toggle.css';
import '@dse.spotify/scss/src/lib/loginPage.css';
import '@dse.spotify/scss/src/lib/homeCards.css';
import '@dse.spotify/scss/src/lib/playlist.css';
import '@dse.spotify/scss/src/lib/panel.css';
import '@dse.spotify/scss/src/lib/playlistCover.css';
import '@dse.spotify/scss/src/lib/song.css';
import '@dse.spotify/scss/src/lib/signupPage.css';
import '@dse.spotify/scss/src/lib/genreCard.css';
import '@dse.spotify/scss/src/lib/searchInput.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="">
                    <Route path='/' index element={<HomePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/signup' element={<SignupPage/>}/>
                    <Route path='/playlist' element={<SongListPage/>}/>
                    <Route path='/search' element={<SearchPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
