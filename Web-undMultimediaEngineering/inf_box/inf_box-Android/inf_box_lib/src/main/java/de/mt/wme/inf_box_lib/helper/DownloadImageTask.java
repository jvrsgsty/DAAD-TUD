
package de.mt.wme.inf_box_lib.helper;

import de.mt.wme.inf_bix_lib.R;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.ImageView;

import java.io.InputStream;

public class DownloadImageTask extends AsyncTask<String, Void, Bitmap> {

    ImageView mImage;

    String url_tag;

    public DownloadImageTask(ImageView bmImage) {
        this.mImage = bmImage;
        mImage.setImageResource(R.drawable.loading);

    }

    @Override
    protected Bitmap doInBackground(String... urls) {
        url_tag = urls[0];
        Bitmap bitmap = null;
        try {
            InputStream in = new java.net.URL(url_tag).openStream();
            bitmap = BitmapFactory.decodeStream(in);
        } catch (Exception e) {
            Log.e("Error", e.getMessage());
            e.printStackTrace();
        }
        return bitmap;
    }

    @Override
    protected void onPostExecute(Bitmap result) {
        String tag = "";
        try {
            tag = mImage.getTag().toString();
        } catch (Exception e) {
            // something went wrong
            e.printStackTrace();
            // set error image
            mImage.setImageResource(R.drawable.ic_img_failure);
        }
        if (tag.equals(url_tag)) {
            mImage.setImageBitmap(result);
        } else {
            // set error image
            mImage.setImageResource(R.drawable.ic_img_failure);
        }

    }

}
