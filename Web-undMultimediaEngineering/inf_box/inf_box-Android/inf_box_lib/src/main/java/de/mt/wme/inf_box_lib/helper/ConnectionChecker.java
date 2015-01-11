
package de.mt.wme.inf_box_lib.helper;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

public class ConnectionChecker {

    public static boolean isDeviceConnected(Context ctx) {
        boolean connected = false;

        ConnectivityManager connMgr = (ConnectivityManager)ctx
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = connMgr.getActiveNetworkInfo();
        if (networkInfo != null && networkInfo.isConnected()) {
            connected = true;
        } else {
            connected = false;
        }

        return connected;

    }
}
