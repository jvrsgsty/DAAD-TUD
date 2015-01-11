
package de.mt.wme.inf_box_lib.helper;

import de.mt.wme.inf_box_lib.misc.IInfboxResultHandler;

import android.os.AsyncTask;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.ExecutionException;

/**
 * Extension of AsyncTask for requesting data from a given URL-String
 * 
 * @author antaug
 */
public class InfboxTask extends AsyncTask<String, Void, String> {

    private IInfboxResultHandler handler;

    @Override
    protected String doInBackground(String... urls) {
        int count = urls.length;
        String result = "";

        if (count >= 1) {
            URL url = null;
            try {
                url = new URL(urls[0]);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

            HttpURLConnection urlConnection = null;
            try {
                urlConnection = (HttpURLConnection)url.openConnection();
                InputStream in = new BufferedInputStream(urlConnection.getInputStream());
                result = getStringFromInputStream(in);
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                urlConnection.disconnect();
            }
        }

        return result;

    }

    /**
     * Get the result of the request.
     * 
     * @return the result as a String
     */
    private String getResult() {
        String result = "";
        try {
            result = this.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

        return result;

    }

    private String getStringFromInputStream(InputStream is) {
        BufferedReader br = null;
        StringBuilder sb = new StringBuilder();
        String line;
        try {
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                sb.append(line);
            }

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return sb.toString();
    }

    @Override
    public void onPostExecute(String result) {
        if (handler != null) {
            handler.handleResult(getResult());
        }
    }

    public void setResultHandler(IInfboxResultHandler handler) {
        this.handler = handler;
    }
}
