
package de.mt.wme.inf_box_lib.objects;

import org.simpleframework.xml.Default;
import org.simpleframework.xml.DefaultType;

/**
 * Represents a single Metadata object, always bound to a (@link Item)
 * 
 * @author antaug
 */
@Default(DefaultType.PROPERTY)
public class Metadata {

    /**
     * Size in bytes
     */
    private long size;

    private String creation_date;

    private String mimetype;

    private boolean thumbnail_available;

    public Metadata() {

    }

    public Metadata(long size, String creation_date, String mimetype) {
        this.size = size;
        this.creation_date = creation_date;
        this.mimetype = mimetype;
        thumbnail_available = false;

    }

    /**
     * @return the size
     */
    public long getSize() {
        return size;
    }

    /**
     * @param size the size to set
     */
    public void setSize(long size) {
        this.size = size;
    }

    /**
     * @return the creation_date
     */
    public String getCreation_date() {
        return creation_date;
    }

    /**
     * @param creation_date the creation_date to set
     */
    public void setCreation_date(String creation_date) {
        this.creation_date = creation_date;
    }

    /**
     * @return the mimetype
     */
    public String getMimetype() {
        return mimetype;
    }

    /**
     * @param mimetype the mimetype to set
     */
    public void setMimetype(String mimetype) {
        this.mimetype = mimetype;
    }

    /**
     * @return the thumbnail_available
     */
    public boolean isThumbnail_available() {
        return thumbnail_available;
    }

    /**
     * @param thumbnail_available the thumbnail_available to set
     */
    public void setThumbnail_available(boolean thumbnail_available) {
        this.thumbnail_available = thumbnail_available;
    }

}
